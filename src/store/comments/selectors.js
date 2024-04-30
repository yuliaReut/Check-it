import {NameSpace} from "../reducer";

const storeCommentsData = (state) => state[NameSpace.COMMENTS].comments;

const postCommentData = (state) => state[NameSpace.COMMENTS].comment;

export {storeCommentsData, postCommentData};

