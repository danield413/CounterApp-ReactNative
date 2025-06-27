import { View, Text, Pressable, StyleSheet } from 'react-native'

interface FABProps {
    label: string
    onPress?: () => void;
    onLongPress?: () => void;
    position?: 'left' | 'right';
}

export default function FAB({
    label, onPress, onLongPress, position = 'right'
}: FABProps) {
    return (
        <Pressable
            style={
                ({ pressed }) => [
                    styles.floatingButton,
                    position === 'left' ? styles.left : styles.right,
                    pressed ? { opacity: 0.7 } : { opacity: 1 }
                ]}

            onPress={() => onPress ? onPress() : null}
            onLongPress={() => onLongPress ? onLongPress() : null}
        >
            <Text style={{ fontSize: 24, color: '#000000', fontWeight: 'bold' }}>
                {label}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    floatingButton: {
        position: 'absolute',
        backgroundColor: '#00ffc8',
        padding: 20,
        borderRadius: 16,
    },
    left: {
        left: 20,
        bottom: 20,
    },
    right: {
        right: 20,
        bottom: 20,
    },
});