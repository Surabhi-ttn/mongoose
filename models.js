const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        isSanitized: {
            type: Boolean
        },
        unit: {
            type: String,
            required: true
        },
        expiryDate: {
            type: Date
        },
        createdDate: {
            type: Date,
            default: Date.now()
        },
        updatedDate: {
            type: Date,
            default: Date.now()
        },
        category: {
            type: String, enum: ['Grocery', 'Medical' ,'Fruits&Veg', 'Berverages', 'Babycare', 'Cleaning'] 
        },
        location: {
            type: String, enum: ['Store', 'Kitchen']
        } 
        
        
});

// userSchema.pre('update', function() {
//   this.set({ updatedAt: Date.now() });
// });

const itemsModel = mongoose.model('Items', itemsSchema);


module.exports = {
  itemsModel
};
