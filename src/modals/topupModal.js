import mongoose from "mongoose";

const topUpSchema = mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,

        },


    },
    {
        timestamps: true,
    }
)


export const TopUp = mongoose.model('Cash', topUpSchema);