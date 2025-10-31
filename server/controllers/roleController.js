import Role from '../models/Role.js';
export const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' });
    }

    const exists = await Role.findOne({ name: name.trim() });
    if (exists) {
      return res.status(409).json({ message: 'Role with this name already exists' });
    }

    const role = await Role.create({
      name: name.trim(),
      description: description.trim(),
    });

    return res.status(201).json({ message: 'Role created successfully', data: role });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create role', error: error.message });
  }
};

export const getRoles = async (req, res) => {
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
    return res.status(500).json({ message: 'Failed to fetch roles', error: error.message });
  }
};
export const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findById(id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    return res.status(200).json({ data: role });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch role', error: error.message });
  }
};


export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const update = {};
    if (name !== undefined) update.name = name.trim();
    if (description !== undefined) update.description = description;

    if (update.name) {
      const exists = await Role.findOne({ _id: { $ne: id }, name: update.name });
      if (exists) {
        return res.status(409).json({ message: 'Another role with this name already exists' });
      }
    }

    const role = await Role.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    return res.status(200).json({ message: 'Role updated successfully', data: role });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update role', error: error.message });
  }
};


export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    return res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete role', error: error.message });
  }
};