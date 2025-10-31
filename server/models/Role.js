
import mongoose from 'mongoose';
const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Role name is required'],
      trim: true,
      minlength: [2, 'Role name must be at least 2 characters'],
      maxlength: [100, 'Role name must be at most 100 characters'],
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Role description must be at most 500 characters'],
      default: '',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Role', RoleSchema);
