import http from '@/utils/http'

export const getWorkplacesList = async (page?: any, limit?: any) =>
  http.get('/workplace', {
    params: {
      page,
      limit,
    },
  })

export const getWorkplacesBySearch = async (page?: any, limit?: any, search?: any) =>
  http.get('/workplace', {
    params: {
      page,
      limit,
      search,
    },
  })

// export const getWorkplacesByStatus = async (page?: any, limit?: any, status?: any) =>
//   http.get('/workplace', {
//     params: {
//       page,
//       limit,
//       status,
//     },
//   })

// export const getWorkplacesByCondition = async (page?: any, limit?: any, search?: any, status?: any) =>
//   http.get('/workplace', {
//     params: {
//       page,
//       limit,
//       search,
//       status,
//     },
//   })
