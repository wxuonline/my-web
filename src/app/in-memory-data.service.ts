import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const blogsList = [
            // { id: 11, category: '前端', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 180, reviewCount: 18 },
            // { id: 12, category: '转载', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 280, reviewCount: 15 },
            // { id: 13, category: '生活', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 130, reviewCount: 8 },
            // { id: 14, category: '生活', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 30, reviewCount: 0 },
            // { id: 15, category: '前端', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 55, reviewCount: 3 },
            // { id: 16, category: '转载', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 110, reviewCount: 5 },
            // { id: 17, category: '转载', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 480, reviewCount: 66 },
            // { id: 18, category: '前端', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 550, reviewCount: 30 },
            // { id: 19, category: '前端', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 430, reviewCount: 14 },
            // { id: 20, category: '前端', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 1390, reviewCount: 220 },
        ];

        const websList = [
            { id: 11, category: '前端', title: "日历排班插件", routing: "scheduling", createdAt: "2018-03-08 16:00" },
            // { id: 12, category: '转载', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 280, reviewCount: 15 },
            // { id: 13, category: '生活', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 130, reviewCount: 8 },
            // { id: 14, category: '生活', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 30, reviewCount: 0 },
            // { id: 15, category: '前端', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 55, reviewCount: 3 },
            // { id: 16, category: '转载', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 110, reviewCount: 5 },
            // { id: 17, category: '转载', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 480, reviewCount: 66 },
            // { id: 18, category: '前端', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 550, reviewCount: 30 },
            // { id: 19, category: '前端', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 430, reviewCount: 14 },
            // { id: 20, category: '前端', title: "文章标题标题标题标题标题标题", content: "文章内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 1390, reviewCount: 220 },
        ];
        return {blogsList, websList};
    }
}
