import {test as base} from '@playwright/test'
import { pageManager } from '../pw-practice-app/page-objects/pageManager'

export type TestOptions = {
    globalsQaURL: string
    formLayoutsPage: string
    pageManager: pageManager
}

export const test = base.extend<TestOptions>({
    globalsQaURL: ['', {option: true}],
    
    formLayoutsPage: [async({page}, use) => {
        await page.goto('/')
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        await use('')
    }, {auto: true}],

    pageManager: async({page}, use) => {
        const pm = new pageManager(page)
        await use(pm)
    }
})