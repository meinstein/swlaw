import { colors } from '../../styles'

export default {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    backgroundColor: colors.blue1
  },
  active: {
    fontWeight: 700,
    textDecoration: 'underline',
    color: colors.black2
  },
  link: {
    textDecoration: 'none',
    color: colors.black1,
    cursor: 'pointer',
    flexGrow: 1,
    textAlign: 'center'
  }
}
