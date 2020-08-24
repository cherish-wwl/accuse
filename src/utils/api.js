const api = {
  // 获取签到日历
  signCalendar: '/user/v2/gold/signCalendar',
  // 进行签到
  signIn: '/user/v2/gold/signIn',
  // 获取任务列表
  taskList: '/user/v2/gold/taskList',
  // 完成任务
  finishTask: '/user/v2/gold/finishTask',
  // 金币明细
  record: '/user/v2/gold/record',
  // 意见列表
  feedback: '/user/v2/feedback',
  // 提交意见
  // '/user/v2/feedback',
  // 获取用户信息
  userInfo: '/user/v2/getInfo',
  // 提交举报
  submitAccuse: '/cmu/v1/accuse',
  // 获取注销状态
  userOffStatus: '/user/v2/close/userStatus',
  // 检测能否注销
  userCancelStatus: '/user/v2/close/cancelStatus',
  // 提交注销申请
  userOffSubmit:'/user/v2/close/submit',
  // 取消注销
  userOffCancel:'/user/v2/close/cancel',
  // 确认注销
  userOffConfirm: '/user/v2/close/confirm'
}

export default api