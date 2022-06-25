import {
    get
} from './get.js';
import {
    emptyTemplatesChecker
} from './emptyTemplatesChecker.js';
import { loopThroughFields } from './loopThroughFields.js';

export default class Templator {
    TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    constructor(template) {
        this._template = template;
    }

    compile(ctx) {
        return this._compileTemplate(this._tempalte, ctx);
    }

    _compileTemplate(template, ctx) {
        let tmpl = this._template;
        let key = null;
        const regExp = this.TEMPLATE_REGEXP;

        // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
        while ((key = regExp.exec(tmpl))) {
            if (key[1]) {
       
                const tmplValue = key[1].trim();
                const data = get(ctx, tmplValue);
                if (typeof data === 'undefined') {
                    emptyTemplatesChecker(key[1])
                }

                if (typeof data === "function") {
                    // console.log(data)
                    window[tmplValue] = data;
                    // console.log(window[tmplValue])
                    tmpl = tmpl.replace(
                        new RegExp(key[0], "gi"),
                        `window.${key[1].trim()}()`
                    );
                    continue;
                }

                tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
            }
        }

        return tmpl;
    }
}