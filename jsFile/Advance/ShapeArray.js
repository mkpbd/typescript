"use strict";
function deleteUser(user) {
    delete user.id;
}
let existingUser = {
    id: 123456,
    name: 'Ima User'
};
deleteUser(existingUser);
let legacyUser = {
    id: '793331',
    name: 'Xin Yang'
};
