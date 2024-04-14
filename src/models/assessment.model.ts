import {
  DocumentType,
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { Survey } from './survey.model'

@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

// Export the User class to be used as TypeScript type
export class Assessment {
  @prop()
  title: string;

  @prop({ type: () => Survey})
  surveies: Survey[];

  @prop({ default: "open"})
  status: string;
}

// Create the user model from the User class
const assessmentModel = getModelForClass(Assessment);
export default assessmentModel;
