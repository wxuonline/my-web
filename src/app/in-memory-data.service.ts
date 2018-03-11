import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const blogsList = [
            // { id: 11, category: '前端', title: "博客标题标题标题标题标题标题", content: "博客内容内容内容内容内容内容内容内容内容内容内容内容内容", createdAt: "2018-01-25 11:11", viewsCount: 180, reviewCount: 18 },
        ];

        const websList = [
            { id: 11, category: '前端', title: "日历排班插件", routing: "scheduling", createdAt: "2018-03-08 16:00" },
        ];
        return {blogsList, websList};
    }
}
