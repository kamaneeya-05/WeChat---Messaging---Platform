import { Response } from 'express';
import User from '../models/User';
import { AuthRequest } from '../middleware/authMiddleware';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export const searchUsers = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const searchQuery = (req.query.search as string) || '';
    const currentUserId = req.user?.userId;

    if (!searchQuery) {
      res.status(400).json({ message: 'Please provide a search term' });
      return;
    }

    const keyword = {
      $or: [
        { email: { $regex: searchQuery, $options: 'i' } },
        { username: { $regex: searchQuery, $options: 'i' } },
      ],
    };

    const users = await User.find(keyword)
      .find({ _id: { $ne: currentUserId } })
      .select('-password')
      .limit(10);

    res.status(200).json(users);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: 'Server error searching for users' });
  }
};

// --- NEW: Get current user's profile
export const getProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const currentUserId = req.user?.userId;

    if (!currentUserId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const user = await User.findById(currentUserId).select('-password');

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ message: 'Server error fetching profile' });
  }
};

// --- NEW: Update profile picture
export const updateProfilePicture = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const currentUserId = req.user?.userId;
    const file = (req as any).file;

    if (!currentUserId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    if (!file) {
      res.status(400).json({ message: 'No file provided' });
      return;
    }

    // Get current user to delete old profile picture
    const user = await User.findById(currentUserId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Delete old profile picture from local storage if exists
    if (user.profilePicture) {
      try {
        const oldFilePath = path.join(__dirname, '../../uploads', user.profilePicture.replace('/uploads/', ''));
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      } catch (err) {
        console.log("Could not delete old profile picture");
      }
    }

    // Save new profile picture locally
    const fileExtension = path.extname(file.originalname);
    const uniqueFilename = `${uuidv4()}${fileExtension}`;
    const filePath = path.join(__dirname, '../../uploads/profile_pictures', uniqueFilename);

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write file to disk
    fs.writeFileSync(filePath, file.buffer);

    // Update user with new profile picture URL
    user.profilePicture = `/uploads/profile_pictures/${uniqueFilename}`;
    await user.save();

    res.status(200).json({
      message: 'Profile picture updated successfully',
      profilePicture: user.profilePicture,
      user: user
    });
  } catch (error) {
    console.error("Profile picture upload error:", error);
    res.status(500).json({ message: 'Server error updating profile picture' });
  }
};

// --- NEW: Delete profile picture
export const deleteProfilePicture = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const currentUserId = req.user?.userId;

    if (!currentUserId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const user = await User.findById(currentUserId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    if (user.profilePicture) {
      try {
        const oldFilePath = path.join(__dirname, '../../uploads', user.profilePicture.replace('/uploads/', ''));
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      } catch (err) {
        console.log("Could not delete profile picture from local storage");
      }
    }

    user.profilePicture = undefined;
    await user.save();

    res.status(200).json({
      message: 'Profile picture deleted successfully',
      user: user
    });
  } catch (error) {
    console.error("Profile picture delete error:", error);
    res.status(500).json({ message: 'Server error deleting profile picture' });
  }
};










