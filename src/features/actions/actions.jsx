export const CHANGE_WISHLIST_STATUS = "CHANGE_WISHLIST_STATUS";
export const RESET_ALL_STATUS = "RESET_ALL_STATUS";

export function changeFavoriteStatus(payload) {
  return { type: "CHANGE_WISHLIST_STATUS", payload };
}

export function resetAll() {
  return { type: "RESET_ALL_STATUS" };
}
