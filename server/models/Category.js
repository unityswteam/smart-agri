import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      minlength: [2, 'Category name must be at least 2 characters'],
      maxlength: [100, 'Category name must be at most 100 characters'],
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Category description must be at most 500 characters'],
      default: '',
    },
    color:{
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model('Category', CategorySchema);
