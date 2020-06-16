import request from '../request'

export function fetchList(query) {
  return request({
    url: '/v2/movie/in_theaters',
    method: 'get',
    params: query
  })
}


export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}
