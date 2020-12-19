import { model, Schema } from 'mongoose';

const PostSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        thumbnail_img: { type: String, required: true },
        thumbnail_intro: { type: String, required: true },
        link: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, required: true, ref: 'User', },
        category: { type: Schema.Types.ObjectId, required: true, ref: 'Category', }
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },
    },
)

const Post = model('Post', PostSchema);

export default Post;