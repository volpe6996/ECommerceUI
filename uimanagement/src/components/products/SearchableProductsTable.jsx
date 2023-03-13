import ProductsTable from "./ProductsTable";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/category&product.css';

const arr = [   
    // { id: 0, name: 'x-kom ELEMENT PLUS i3-12100F/16GB/1TB/GTX1650/W11x', description: 'Graj jak Nigdy Wcześniej: Komputer do Gier z wydajnymi podzespołami Element Plus to komputer do gier, który jest wyposażony w wydajny procesor Intel oraz kartę graficzną Nvidia GeForce. Dzięki takiemu połączeniu zagrasz w najbardziej wymagające gry bez żadnych ograniczeń. Ciesz się z najlepszych wrażeń podczas gry w ulubione tytuły. W atmosferę wprowadzi Cię bijące z wnętrza komputera RGB. Natomiast w misjach, gdzie potrzebujesz pełnego skupienia, załóż drugi panel boczny. Dodatkowe wyciszenie oraz zasłonięte podświetlenie RGB zapewni Ci jeszcze większą koncentrację. Zredukowany dźwięk prestiż Poznaj moc komputera Element Plus Wiemy, że podczas gry nie ma czasu na pół środki. Dlatego specjalnie dla Ciebie przetestowaliśmy komputer Element Plus z procesorami Intel oraz kartami graficznymi GeForce. Przekonaj się, ile FPS średnio osiąga w grach ten komputer (rozdzielczość Full HD, ustawienia detali High). Sprawdź osiągi w grach przy wysokich detalach w rozdzielczości 1080p prestiż Zaprojektowany do różnych zastosowań ELEMENT PLUS to komputer, który z łatwością dopasuje się do każdego wnętrza. Minimalistyczna obudowa doskonale uzupełni każde stanowisko biurowe, jak i pokój gracza. Wybraliśmy ją, bo zapewnia optymalną cyrkulacja powietrza, która bazuje na dwóch wentylatorach. Komputer ma też matowy i łatwy do utrzymania w czystości panel przedni, szybko dostępne porty USB 3.0 na górnym panelu oraz boczny panel ze szkła. Dzięki niemu możesz oglądać harmonijną pracę procesora Intel, a podświetlenie RGB oświetli Twoje biurko i wprowadzi gamingową atmosferę. Jeśli jednak potrzebujesz, aby nic Cię nie rozpraszało, wystarczy, że wymienisz szklany panel boczny na panel wyciszający. Jest on dodany do zestawu wraz z komputerem. Wybór należy do Ciebie. komputer stacjonarny prestiż Komputer dwóch twarzy: Gamingowy blask i codzienna dyskrecja - wybierz swoje oblicze Element Plus to komputer, który ma dwa różne tryby – tryb gamingowy z RGB wspomaga immersję podczas grania oraz tryb dyskretny z panelami wyciszającymi, dzięki któremu nic nie rozproszy Cię podczas codziennej pracy. Panele zostały zaprojektowane tak, aby nie sprawiły Ci problemu z ich wymianą. W efekcie możesz łatwo i szybko dostosować komputer do swoich preferencji. Gamingowy potencjał prestiż Cichy i cichszy Zanurz się w pełnej rozgrywce i oddaj się pełnemu skupieniu podczas pracy. Obudowa komputera jest wyciszona matami dźwiękochłonnymi. Stabilna konstrukcja eliminuje wibracje podczas pracy. Wolnoobrotowe wentylatory zapewnią Ci niskie temperatury podzespołów. Tym samym zwiększą kulturę pracy. Jeśli jednak chcesz, aby nic Cię nie rozpraszało, to komputer dodatkowo jest wyposażony w zestawie o panel boczny. Sprawi on, że już nic nie zakłóci Twojej rozgrywki. Zredukowany dźwięk 1 Test wykonany podczas założonego panelu wyciszającego na wysokości głowy osoby siedzącej w odległości 50 cm od urządzenia, przy standardowym obciążeniu komputera (przeglądanie internetu, oglądanie filmów, wideokonferencje, praca w aplikacjach biurowych). Platforma testowa: ELEMENT PLUS i5-11400F + RTX 3050.', categoryName: 'a'}, 
    { id: 0, name: 'Auto', description: 'Szybkie bo czerwone', categoryName: 'a'},
    { id: 1, name: 'Jabłko', description: 'Dobre bo kaszubskie', categoryName: 'b'}, 
    { id: 2, name: 'Ołówek', description: 'Za darmo bo z Castoramy', categoryName: 'c'},
    { id: 0, name: 'Auto', description: 'Szybkie bo czerwone', categoryName: 'a'},
    { id: 1, name: 'Jabłko', description: 'Dobre bo kaszubskie', categoryName: 'b'}, 
    { id: 2, name: 'Ołówek', description: 'Za darmo bo z Castoramy', categoryName: 'c'},
    { id: 0, name: 'Auto', description: 'Szybkie bo czerwone', categoryName: 'a'},
    { id: 1, name: 'Jabłko', description: 'Dobre bo kaszubskie', categoryName: 'b'}, 
    { id: 2, name: 'Ołówek', description: 'Za darmo bo z Castoramy', categoryName: 'c'},
    { id: 0, name: 'Auto', description: 'Szybkie bo czerwone', categoryName: 'a'},
    { id: 1, name: 'Jabłko', description: 'Dobre bo kaszubskie', categoryName: 'b'}, 
    { id: 2, name: 'Ołówek', description: 'Za darmo bo z Castoramy', categoryName: 'c'},
    { id: 0, name: 'Auto', description: 'Szybkie bo czerwone', categoryName: 'a'},
    { id: 1, name: 'Jabłko', description: 'Dobre bo kaszubskie', categoryName: 'b'}, 
    { id: 2, name: 'Ołówek', description: 'Za darmo bo z Castoramy', categoryName: 'c'},
    { id: 0, name: 'Auto', description: 'Szybkie bo czerwone', categoryName: 'a'},
    { id: 1, name: 'Jabłko', description: 'Dobre bo kaszubskie', categoryName: 'b'}, 
    { id: 2, name: 'Ołówek', description: 'Za darmo bo z Castoramy', categoryName: 'c'},
];

const SearchableProductsTable = () => {
    return (  
        <div className="searchableProductsTable">
            <div className="searchBar sticky-top p-2">
                <div class="input-group w-25">
                    <Form.Control type="text" className="form-control me-2 rounded" placeholder="Search for Products"/>
                    <Button variant="outline-secondary" className="rounded me-2" type="button">Fetch</Button>
                    <Button variant="outline-success" className="rounded" type="button">Add new Product</Button>
                </div>
            </div>
            <ProductsTable productsList={arr} />
        </div>
    );
}
 
export default SearchableProductsTable;