const Account = require("./models/accountSchema")
const Post = require("./models/postSchema")
const express = require("express")
const mongoose = require("./connect")




const createAccount = async(userId, userName, email, pwd, school) => {
    const account = new Account({
        userId: userId,
        username: userName,
        email: email,
        password: pwd,
        friends: [],
        friendRequests: [],
        postsOwned: [],
        school: school
    });
    await account.save()
}

const deleteAccount = async(userId) => {
    const user = await Account.findOne({userId: userId})
    for (let i = 0 ; i < user.friends.length ; i++){
        const friend = await Account.findOne({userId: user.friends[i]})
        friend.friends.splice(friend.friends.indexOf(userId), 1)
        await friend.save()
    }
    await Account.deleteOne({userId: userId})
}

const createPost = async(postId, postAuthorId, content, hashtagArray, meta) => {
    const post = new Post({
        postId: postId,
        postAuthorId: postAuthorId,
        content: content,
        hashtagArray: hashtagArray,
        meta: meta,
        commentArray: []
    });
    const author = await Account.findOne({userId: postAuthorId})
    author.postsOwned.push(postId)
    await author.save()
    await post.save()
}

const deletePost = async(postId) => {
    const post = await Post.findOne({postId: postId})
    const author = await Account.findOne({userId: post.postAuthorId})
    author.postsOwned.splice(author.postsOwned.indexOf(postId), 1)
    await author.save()
    await Post.deleteOne({postId: postId})
}

const requestFriend = async(senderId, receiverId) => {
    // const sender = await Account.findOne({userId: senderId})
    const receiver = await Account.findOne({userId: receiverId})
    receiver.friendRequests.push(senderId)
    await receiver.save()
}

const acceptFriendRequest = async(senderId, receiverId) => {
    const sender = await Account.findOne({userId: senderId})
    const receiver = await Account.findOne({userId: receiverId})
    sender.friends.push(receiverId)
    receiver.friends.push(senderId)
    receiver.friendRequests.splice(receiver.friendRequests.indexOf(senderId), 1)
    await sender.save()
    await receiver.save()
}

const declineFriendRequest = async(senderId, receiverId) => {
    const receiver = await Account.findOne({userId: receiverId})
    receiver.friendRequests.splice(receiver.friendRequests.indexOf(senderId), 1)
    await receiver.save()
}

const removeFriend = async(removerId, targetId) => {
    const remover = await Account.findOne({userId: removerId})
    const target = await Account.findOne({userId: targetId})
    remover.friends.splice(remover.friends.indexOf(targetId), 1)
    target.friends.splice(target.friends.indexOf(removerId), 1)
    await remover.save()
    await target.save()
}

//createAccount("21", "sim", "awfa@gmail.com", "awefaw", "u of waterloo")
// deleteAccount("23")
// createPost("13", "23", "awfawe", "free", "awfe")
// deletePost("13")
// requestFriend("23", "21")
// acceptFriendRequest("23", "21")
// declineFriendRequest("23", "21")
// removeFriend("23", "21")

