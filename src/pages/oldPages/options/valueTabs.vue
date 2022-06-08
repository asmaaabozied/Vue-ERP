<template>
  <div
    class="tab-pane fade active show"
    id="page-general2"
    role="tabpanel"
    aria-labelledby="page-g-tab"
  >
    <ul class="nav nav-tabs0" id="myTabs-general2" role="tablist">
      <li class="nav-item" v-for="language in languages" :key="language.prefix">


        <a
          class="nav-link language-tab"
          :class="{ active: language.name == 'arabic' }"
          id="langu-tab"
          :data-toggle="`tab`"
          :href="`#${language.prefix}-value--${index}`"
          :role="`tab`"
          :aria-controls="`${language.prefix}`"
          aria-selected="false"
        >
          <span class="nav-text"> {{ language.name }}</span>
        </a>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent-general2">
      <div
        v-for="language in languages"
        :key="language.id"
        class="tab-pane fade"
        :class="{ 'show active': language.name == 'arabic' }"
        :id="`${language.prefix}-value--${index}`"
        :role="`tabpanel`"
        :aria-labelledby="`${language.prefix}-tab`"
      >
        <slot :language="language.prefix" name="input"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lang-tabs",
  props: {
    index: {
      type:Number,
      default:1
    },

  },
  data() {
    return {
      languages: window.$languages,
    };
  },
};
</script>
 
