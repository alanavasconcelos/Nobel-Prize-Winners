import Background from "../components/Background";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { searchPrizes } from "../functions/search";
import CreateCard from "../components/Cards";
import { styles, colors } from "../../styles";
import { Searchbar } from "react-native-paper";

import parsePrize from "../functions/parsePrize";

export default SearchScreen = ({ navigation, route }) => {

    const { initialQuery } = route.params
    const [results, setResults] = useState(null);
    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const onChangeSearch = query => setSearchQuery(query);

    const searchAction = () => {
        setResults(searchPrizes(results? searchQuery: initialQuery));
    }

    useEffect(searchAction, [])

    return (
        <Background title="Search">
            <View style={{ flex: 1, paddingBottom: 30, paddingTop: 30 }}>
                <Searchbar style={{ backgroundColor: colors.tabBar }}
                    inputStyle={styles.text}
                    iconColor={colors.text}
                    onIconPress={searchAction}
                    onSubmitEditing={searchAction}
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                {results &&
                    results.map((nobel, idx) =>
                        <CreateCard
                            nobelObject={parsePrize(nobel)} key={idx}
                            onPress={() => navigation.navigate("PrizeInfo", { nobelObject: parsePrize(nobel) })}
                        />)
                }
            </View>
        </Background>
    )
}