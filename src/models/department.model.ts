import {
  DocumentType,
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
} from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

export class Department {
  @prop()
  title: string;
}

// Create the user model from the User class
const departmentModel = getModelForClass(Department);
export default departmentModel;
