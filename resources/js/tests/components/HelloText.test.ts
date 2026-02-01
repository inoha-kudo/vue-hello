import { render, screen } from '@testing-library/vue';
import HelloText from '../../components/HelloText.vue';

test('renders a greeting', () => {
    render(HelloText, {
        props: {
            name: 'World',
        },
    });

    screen.getByText('Hello, World!');
});

test('updates when name changes', async () => {
    const { rerender } = render(HelloText, {
        props: {
            name: 'World',
        },
    });

    await rerender({ name: 'Vue' });

    screen.getByText('Hello, Vue!');
});
