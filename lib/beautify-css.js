/**
 * @file CSS格式化模块
 * @author  virola <virola.zhu@gmail.com>
 */

// TODO: 如果输入文件不是规范的CSS文件，不会提示错误，照样输出格式化后的CSS

/**
 * 格式化CSS代码
 * 
 * @param {string} sourceCode 要格式化的CSS代码
 * @param {Object} params 格式化选项
 * @param {number} params.indent 空格缩进个数
 * 
 * @return {string} 格式化后的CSS代码
 */
function beautifyCss(sourceCode, params) {
    params = params || {};
    var cssBeautify = require('cssbeautify');

    var indent = params.indent || 4;

    return cssBeautify(sourceCode, {
        indent: (new Array(indent + 1)).join(' '),
        autosemicolon: true
    });
}



module.exports = beautifyCss;

