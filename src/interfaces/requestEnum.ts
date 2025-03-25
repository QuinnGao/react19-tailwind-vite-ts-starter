/**
 * @description Content Type Enumeration
 */
export const ContentTypeEnum = {
  // form-data qs
  FORM_URLENCODED: "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data upload
  FORM_DATA: "multipart/form-data;charset=UTF-8",
  // JSON
  JSON: "application/json;charset=UTF-8",
} as const

export type ContentTypeEnum =
  (typeof ContentTypeEnum)[keyof typeof ContentTypeEnum]

/**
 * @description Status codes agreed with the backend
 */
export const ResultEnum = {
  SUCCESS: 0,
  ERROR: 1,
} as const

export type ResultEnum = (typeof ResultEnum)[keyof typeof ResultEnum]
