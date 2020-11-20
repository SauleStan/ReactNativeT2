import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import ButtonComponent from './ButtonComponent';


export default function CommentComponent({ comments }) {

    const [newComment, onChangeComment] = useState('write a comment');
    const [name, onChangeName] = useState('write a name');
    const [commentArray, setCommentArray] = useState(comments);

    const onButtonPressed = () => { 
        let commentText = '{ "name": ' + '"' + name + '"'  + ', "comment": ' + '"' + newComment + '"' + ' }';
        let commentObj = JSON.parse(commentText);
        setCommentArray([...commentArray, commentObj]);
        // comments.push(commentObj);
        // console.log(commentText);
    }
    return (
        <View style={styles.commentContainer}>
            <Text style={styles.commentsTitle}>COMMENTS</Text>
            {/* comment input??? */}
            <View style={styles.commentInputContainer}>
                <Text style={{ textAlign: "center" }}>ADD COMMENT</Text>
                <View>
                    <Text style={{ marginLeft: 10 }}>name:</Text>
                    <TextInput
                        style={styles.commentInput}
                        onChangeText={text => onChangeName(text)}
                        value={name}
                    />
                    <Text style={{ marginLeft: 10 }}>Comment:</Text>
                    <TextInput
                        style={styles.commentInput}
                        onChangeText={text => onChangeComment(text)}
                        value={newComment}
                    />
                    <View style={{ margin: 5 }}>
                        <ButtonComponent title="Submit comment" onPress={onButtonPressed} />
                    </View>
                </View>

            </View>
            {/* all comments */}
            <View style={styles.comments}>
                {commentArray.map((comment) => {
                    return (
                        <View style={styles.commentCard}>
                            <Text style={styles.commentName}>{comment.name}</Text>
                            <Text style={styles.commentContent}>Says: {comment.comment}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    commentContainer: {
        borderWidth: 3,
        borderRadius: 10,
        width: "90%",
    },
    comments: {
        padding: 10,
        // backgroundColor: 'green',
    },
    commentsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    commentCard: {
        borderWidth: 1,
        marginBottom: 2,
        // paddingLeft: 10,
    },
    commentName: {
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 10,
        borderWidth: 0.2,
    },
    commentContent: {
        fontSize: 16,
        paddingLeft: 10,
    },
    commentInputContainer: {
        borderWidth: 3,
        borderRadius: 10,
        width: "90%",
        marginLeft: 10,
    },
    commentInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    }

})