import type { LocalSearchOptions } from 'vitepress';

export const localSearchOptions: LocalSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: '搜索知识库',
          buttonAriaLabel: '搜索知识库'
        },
        modal: {
          noResultsText: '无法找到相关结果',
          resetButtonTitle: '清除查询条件',
          footer: {
            selectText: '选择',
            navigateText: '切换'
          }
        }
      }
    }
  }
};