// $Id$

/**
 * Baseclass for all free text widgets.
 *
 * @class AbstractTextWidget
 * @augments AjaxSolr.AbstractWidget
 */
AjaxSolr.AbstractTextWidget = AjaxSolr.AbstractWidget.extend(
  /** @lends AjaxSolr.AbstractTextWidget.prototype */
  {
  /**
   * The main Solr query.
   *
   * @field
   * @private
   * @type String
   * @default ""
   */
  q: '',

  /**
   * Sets the main Solr query to the given string.
   *
   * @param {String} q The new Solr query.
   * @returns {Boolean} Whether the selection changed.
   */
  set: function (q) {
    return this.changeSelection(function () {
      this.q = q;
    });
  }

  /**
   * Sets the main Solr query to the empty string.
   *
   * @returns {Boolean} Whether the selection changed.
   */
  clear: function () {
    return this.changeSelection(function () {
      this.q = '';
    });
  },

  /**
   * Helper for selection functions.
   *
   * @param {Function} Selection function to call.
   * @returns {Boolean} Whether the selection changed.
   */
  changeSelection: function (func) {
    var start = this.q;
    func.apply(this);
    if (this.q !== start) {
      this.afterChangeSelection();
    }
    return this.q !== start;
  },

  /**
   * An abstract hook for child implementations.
   * This method is executed after the main Solr query changes.
   */
  afterChangeSelection: function () {},

  alterQuery: function (queryObj) {
    queryObj.q = this.q;
  }
});
