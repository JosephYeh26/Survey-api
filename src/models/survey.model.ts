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

export class Survey {
  @prop()
  title: string;

  @prop({ type: () => [String]})
  questions: string[];
}

// Create the user model from the User class
const surveyModel = getModelForClass(Survey);
export default surveyModel;
