import { _ as __nuxt_component_0 } from './nuxt-link-QqKfLxj4.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-DqWkwXRj.mjs';
import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as siteMetaInfo } from './sitemetainfo-CzJRJiSg.mjs';
import { a as articles } from './articles--kL3T6RP.mjs';
import { d as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';

const _sfc_main$1 = {
  __name: "blogItem",
  __ssrInlineRender: true,
  props: ["title", "image", "description", "date", "slug", "tags"],
  setup(__props) {
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en", {
        year: "numeric",
        month: "long"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><article class="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"><h3 class="mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/blog/${__props.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h3><div class="flex mb-2 -mt-2 align-middle"><div class="flex prose prose-slate items-center gap-1 flex-wrap"><!--[-->`);
      ssrRenderList(__props.tags, (tag) => {
        _push(`<span>${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div><div class="mb-6 prose prose-slate dark:prose-dark"><p>${ssrInterpolate(__props.description)}</p></div><div class="mt-auto flex flex-col lg:flex-row-reverse items-start lg:items-center lg:justify-end">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "hidden lg:block lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:h-48 md:h-36 object-cover object-center rounded-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500",
        width: "300",
        src: __props.image
      }, null, _parent));
      _push(`<div class="lg:absolute lg:top-0 lg:right-full mr-2 mt-2"><dl><dt class="sr-only">Date</dt><dd class="text-sm leading-6 dark:text-slate-400 lg:mr-8 lg:whitespace-nowrap font-bold"><div class="bg-indigo-500 text-white py-1 px-2 rounded-md"><time datetime="2022-02-24T12:00:00.000Z">${ssrInterpolate(formatDate(__props.date))}</time></div></dd></dl></div></div><br></article></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `${siteMetaInfo.title} | Blogs`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Its Solaiman's Pen and Paper to write "
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_blog_item = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="pt-16 pb-9 sm:pb-16 sm:text-center"><h1 class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"> D\xE9cryptages </h1><p class="text-lg text-slate-700 dark:text-slate-400"> Cl\xE9s de lecture pour saisir l\u2019actualit\xE9 et agir </p></header><div class="space-y-16 mx-auto max-w-7xl"><!--[-->`);
      ssrRenderList(unref(articles), (article) => {
        _push(ssrRenderComponent(_component_blog_item, {
          key: article.title,
          title: article.title,
          image: article.image,
          description: article.description,
          date: article.date,
          slug: article.slug
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Coehs1dk.mjs.map
