// 问卷题目类型
export const QUESTION_TYPE = [
    {
        lable:'单选题',
        value:'radio'
    },{
        lable:'多选题',
        value:'check'
    },{
        lable:'问答题',
        value:'ask'
    },{
        lable:'评分题',
        value:'score'
    }
];


// 问卷列表地址【增删改查】
export const questionListUrl = 'https://a6185090034795-dev.apicloud-saas.com/api/questionLists';