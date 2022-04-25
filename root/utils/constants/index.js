// utils/constants
// description: We try to set all constants into a big one to reduce Javascript
//              constants performance issue.

export default {
  API: {
    FETCH_DATA_URL:
      'https://static.leboncoin.fr/img/shared/technical-test.json',
    PROXY: 'http://10.0.2.2:16001/',
    TIMEOUT: 20000,
  },
  LABELS: {
    CLEAR_DATABASE: 'Clear the database',
    IMVALID_DATA_FORMAT: ' Invalid data format',
    LIST: 'Item List',
    NO_CARD: 'No card to persist',
    NO_DATABASE: 'The database is not set',
    NO_RESPONSE_DATA: 'There is no data in the query response',
    SEARCH_DATA_FAILED: 'No data for SearchDataAPI',
    WELCOME: 'Welcome to the ListItem app',
  },
  STATES: {
    ERROR: 'error',
    LOADING: 'loading',
  },
  STORAGE_ITEMS: {
    DB: 'storage_list_item_app',
    CARD: 'card_items.db',
    THEME: 'app_theme_storage',
  },
  THEMES: {
    DEFAULT: {
      COLORS: {
        STATIC: {
          PRIMARY: '#EBD8C3',
          SECONDARY: '#F7E9D7',
          TERTIARY: '#FFF6EA',
          QUATERNARY: '#FFEEEE',
          LIGHT: '#f8f8fa',
          DARK: '#4d3e30',
        },
        DYNAMIC: {
          INFO: '#035397',
          SUCCESS: '#1C7947',
          WARNING: '#C36A2D',
          DANGER: '#A9333A',
        },
      },
    },
  },
}
