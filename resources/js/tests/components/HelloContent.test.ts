import { render } from '@testing-library/vue';
import HelloContent from '../../components/HelloContent.vue';

test('renders message from prop', () => {
    const { getByText } = render(HelloContent, {
        props: {
            message: 'World',
        },
    });

    expect(getByText('Hello, World!')).toBeDefined();
});

test('updates prop', async () => {
    const { rerender, getByText } = render(HelloContent, {
        props: {
            message: 'World',
        },
    });

    await rerender({ message: 'Vue' });

    expect(getByText('Hello, Vue!')).toBeDefined();
});
