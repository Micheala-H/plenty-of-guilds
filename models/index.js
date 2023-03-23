const User = require('./User');
const Character = require('./Character');
const Review = require('./Review')

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Character,{
    foreignKey: 'character_id'
})

Character.hasMany(Review, {
    foreignKey: 'character_id',
    onDelete: 'CASCADE'
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(User, {
    foreignKey: 'user_id'
});





module.exports = {
    User,
    Character,
    Review
}
