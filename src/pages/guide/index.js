import * as React from "react";
import JaviEscacenaHomeLayout from '../../components/javiescacena-home-layout';

const IndexPage = () => {
  return (
    <JaviEscacenaHomeLayout>
      <h1>UI guide</h1>
      <h2>Spacing Scale</h2>
      <ul className="spacing-palette ma-12 fn box-shadow-01 pa-12">
        <li className="fg-grey-80 mr-12">8px</li>
        <li className="fg-grey-80 mr-12 pa-8"></li>
        <li className="fg-grey-80 mr-12">12px</li>
        <li className="fg-grey-80 mr-12 pa-12"></li>
        <li className="fg-grey-80 mr-12">16px</li>
        <li className="fg-grey-80 mr-12 pa-16"></li>
        <li className="fg-grey-80 mr-12">20px</li>
        <li className="fg-grey-80 mr-12 pa-20"></li>
        <li className="fg-grey-80 mr-12">24px</li>
        <li className="fg-grey-80 mr-12 pa-24"></li>
        <li className="fg-grey-80 mr-12">30px</li>
        <li className="fg-grey-80 mr-12 pa-30"></li>
        <li className="fg-grey-80 mr-12">36px</li>
        <li className="fg-grey-80 mr-12 pa-36"></li>
        <li className="fg-grey-80 mr-12">40px</li>
        <li className="fg-grey-80 mr-12 pa-40"></li>
        <li className="fg-grey-80 mr-12">60px</li>
        <li className="fg-grey-80 mr-12 pa-60"></li>
        <li className="fg-grey-80 mr-12">72px</li>
        <li className="fg-grey-80 mr-12 pa-72"></li>
      </ul>

      <h2>Color palette - Greys</h2>
      <ul className="color-palette ma-12 fn box-shadow-01 pa-12">
        <li className="fg-white bg-grey-100 mr-12 pa-12">grey100</li>
        <li className="fg-white bg-grey-80 mr-12 pa-12">grey80</li>
        <li className="fg-white bg-grey-60 mr-12 pa-12">grey60</li>
        <li className="fg-white bg-grey-40 mr-12 pa-12">grey40</li>
        <li className="fg-grey-80 bg-grey-20 mr-12 pa-12">grey20</li>
      </ul>

      <h2>Color palette - Primaries</h2>
      <ul className="color-palette ma-12 fn box-shadow-01 pa-12">
        <li className="fg-white bg-primary-blue-900 mr-12 pa-12">
          primary-blue-900
        </li>
        <li className="fg-white bg-primary-blue-800 mr-12 pa-12">
          primary-blue-800
        </li>
        <li className="fg-white bg-primary-blue-700 mr-12 pa-12">
          primary-blue-700
        </li>
        <li className="fg-white bg-primary-blue-600 pa-12">primary-blue-600</li>
        <li className="fg-grey-80 bg-primary-blue-500 mr-12 pa-12">
          primary-blue-500
        </li>
      </ul>

      <h2>Fonts</h2>
      <ul className="font-palette ma-12 fn box-shadow-01 pa-12">
        <li className="fg-grey-100 bg-white mr-12 pa-12">
          <h1>H1</h1>
        </li>
        <li className="fg-grey-100 bg-white mr-12 pa-12">
          <h2>H2</h2>
        </li>
        <li className="fg-grey-100 bg-white mr-12 pa-12">
          <p className="font-paragraph-medium">Paragraph medium</p>
        </li>
        <li className="fg-grey-100 bg-white mr-12 pa-12">
          <p className="font-paragraph-small">Paragraph small</p>
        </li>
        <li className="fg-grey-100 bg-white mr-12 pa-12">
          <p className="font-paragraph-tiny">Paragraph tiny</p>
        </li>
      </ul>

      <h2>Cards</h2>
    </JaviEscacenaHomeLayout>
  );
};

export default IndexPage;
