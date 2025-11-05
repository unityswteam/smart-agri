
import Category from '../models/Category.js';
// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { name, description, color } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const existing = await Category.findOne({ name: name.trim() });
    if (existing) {
      return res.status(409).json({ message: 'Category with this name already exists' });
    }

    const category = await Category.create({ name: name.trim(), description, color });
    return res.status(201).json({ message: 'Category created successfully', data: category });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create category', error: error.message });
  }
};

// Get all categories with optional pagination and search
export const getCategories = async (req, res) => {
  try {
    const { page = 1, limit = 20, q } = req.query;
    const query = {};

    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [items, total] = await Promise.all([
      Category.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Category.countDocuments(query),
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
    return res.status(500).json({ message: 'Failed to fetch categories', error: error.message });
  }
};

// Get a single category by ID
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    return res.status(200).json({ data: category });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch category', error: error.message });
  }
};

// Update a category by ID
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, color } = req.body;

    const update = {};
    if (name !== undefined) update.name = name.trim();
    if (description !== undefined) update.description = description;
    if (color !== undefined) update.color = color;

    if (update.name) {
      const exists = await Category.findOne({ _id: { $ne: id }, name: update.name });
      if (exists) {
        return res.status(409).json({ message: 'Another category with this name already exists' });
      }
    }

    const category = await Category.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json({ message: 'Category updated successfully', data: category });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update category', error: error.message });
  }
};

// Delete a category by ID
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    return res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete category', error: error.message });
  }
};
