export class WebPanelSettings {
  /**@type {string} */
  #uuid;
  /**@type {string} */
  #url;
  /**@type {string} */
  #faviconURL;
  /**@type {boolean} */
  #pinned;
  /**@type {string} */
  #width;
  /**@type {boolean} */
  #mobile;
  /**@type {number} */
  #zoom;
  /**@type {boolean} */
  #loadOnStartup;
  /**@type {boolean} */
  #unloadOnClose;
  /**@type {boolean} */
  #hideToolbar;

  /**
   *
   * @param {string} uuid
   * @param {string} url
   * @param {string} faviconURL
   * @param {boolean} pinned
   * @param {string} width
   * @param {boolean} mobile
   * @param {number} zoom
   * @param {boolean} loadOnStartup
   * @param {boolean} unloadOnClose
   * @param {boolean} hideToolbar
   */
  constructor(
    uuid,
    url,
    faviconURL,
    pinned,
    width,
    mobile,
    zoom,
    loadOnStartup,
    unloadOnClose,
    hideToolbar,
  ) {
    this.#uuid = uuid ?? crypto.randomUUID();
    this.#url = url;
    this.#faviconURL = faviconURL;
    this.#pinned = pinned ?? true;
    this.#width = width ?? "400";
    this.#mobile = mobile ?? false;
    this.#zoom = zoom ?? 1;
    this.#loadOnStartup = loadOnStartup ?? false;
    this.#unloadOnClose = unloadOnClose ?? false;
    this.#hideToolbar = hideToolbar ?? false;
  }

  get uuid() {
    return this.#uuid;
  }

  get url() {
    return this.#url;
  }

  get faviconURL() {
    return this.#faviconURL;
  }

  get pinned() {
    return this.#pinned;
  }

  get width() {
    return this.#width;
  }

  get mobile() {
    return this.#mobile;
  }

  get zoom() {
    return this.#zoom;
  }

  get loadOnStartup() {
    return this.#loadOnStartup;
  }

  get unloadOnClose() {
    return this.#unloadOnClose;
  }

  get hideToolbar() {
    return this.#hideToolbar;
  }

  /**
   *
   * @returns {object}
   */
  toObject() {
    return {
      uuid: this.#uuid,
      url: this.#url,
      faviconURL: this.#faviconURL,
      pinned: this.#pinned,
      width: this.#width,
      mobile: this.#mobile,
      zoom: this.#zoom,
      loadOnStartup: this.#loadOnStartup,
      unloadOnClose: this.#unloadOnClose,
      hideToolbar: this.#hideToolbar,
    };
  }
}
