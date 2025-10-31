
import User from '../models/User.js';

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required' });
    }

    const exists = await User.findOne({ email: email.trim().toLowerCase() });
    if (exists) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    const user = await User.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    });

    return res.status(201).json({ message: 'User created successfully', data: user });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create user', error: error.message });
  }
};

// Get all users with optional pagination and search
export const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 20, q } = req.query;
    const query = {};

    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { email: { $regex: q, $options: 'i' } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [items, total] = await Promise.all([
      User.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      User.countDocuments(query),
    ]);

    return res.status(200).json({
      data: items,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)) || 1,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch user', error: error.message });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const update = {};
    if (name !== undefined) update.name = name.trim();
    if (email !== undefined) update.email = email.trim().toLowerCase();
    if (password !== undefined) update.password = password;

    if (update.email) {
      const exists = await User.findOne({ _id: { $ne: id }, email: update.email });
      if (exists) {
        return res.status(409).json({ message: 'Another user with this email already exists' });
      }
    }

    const user = await User.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User updated successfully', data: user });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update user', error: error.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete user', error: error.message });
  }
};
