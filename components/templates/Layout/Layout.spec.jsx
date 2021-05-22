import React from 'react'
import { mount } from 'enzyme'

import { Layout } from './Layout'

describe('Layout', () => {
    let wrapper

    describe('when rendered', () => {
        beforeEach(() => {
            wrapper = mount(
                <Layout>
                    Content
                </Layout>
            )
        })

        test('renders the content in main tag', () => {
            expect(wrapper.find('main').text()).toEqual('Content')
        })
    })
})
