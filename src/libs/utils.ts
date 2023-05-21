export const formatCurrency = (value: number, currency='EUR', locale='it-IT' ) => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value)
}

export const isValidUrl = (url: string) => {
  try {
    new URL(url)
  } catch (error) {
    return false;
  }
  return true;
}
