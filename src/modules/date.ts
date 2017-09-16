import * as moment from 'moment'

export const toDateFormat = (date: string|number|Date|moment.Moment, format) =>
  moment(date).format(format)

