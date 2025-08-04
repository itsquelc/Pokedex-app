import { StyleShee, Text, view } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TextInfo({ label, text }) {
    return (
        <Text style={styles.text}>
            <Text style={style.bold}>{label}</Text> {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#fff', 
        fontSize: 18,
        textAlign: 'justify',
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold'
    }
});