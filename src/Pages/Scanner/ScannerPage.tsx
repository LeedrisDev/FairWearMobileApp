import ProductPage from '../Product/ProductPage';
import Scanner from './Scanner';
import * as React from 'react';
import { useEffect } from 'react';

import './ScannerPage.css';
import ProductByUpc from '../../Business/ProductBusiness';
import { ProductModel } from '../../Models/ProductModel';
import { GeneralContext } from '../../Contexts/GeneralContext';
import {
  getUserExperience, getUserHistory, putProductHistory, updateLevel,
} from '../../DataAccess/UserDataAccess';

interface ScannerStateProps {
  barcode: string;
  product: ProductModel | null;
}

function ScannerPage() {
  const initialState: ScannerStateProps = {
    barcode: '',
    product: null,
  };
  const [state, setState] = React.useState(initialState);
  const { barcode, product } = state;
  const generalContext = React.useContext(GeneralContext);

  const updateState = (newState: any) => {
    setState({ ...state, ...newState });
  };

  function isValidUPCorEAN(code: string): boolean {
    const upcEanRegex = /^[0-9]{12,13}$/;
    return upcEanRegex.test(code);
  }

  const onDetected = async (resultFinal: any) => {
    updateState({ barcode: resultFinal });

    const experience = await getUserExperience(generalContext?.id);

    await updateLevel({
      userId: generalContext?.id,
      score: generalContext?.score + 10,
      level: generalContext?.level,
      todos: generalContext?.todos,
      id: experience.id,
    });

    if (isValidUPCorEAN(resultFinal)) {
      updateState({ barcode: resultFinal });
    } else {
      console.error(`bad barcode format ${resultFinal}`);
    }

    window.location.reload();
  };

  useEffect(() => {
    if (barcode !== '') {
      ProductByUpc('193392069882').then(async (productResponse: ProductModel) => {
        updateState({ product: productResponse });
        console.log(productResponse.id);

        await putProductHistory({
          userId: generalContext?.id,
          productId: productResponse.id,
        });
      });
    }
  }, [barcode]);

  const handleBackButton = () => {
    updateState({ product: null });
  };

  /* const mockedProduct = {
     name: 'The North Face M Etip Hardface Glove',
     country: 'United States',
     image: 'No image found',
     globalScore: 3,
     scores: {
       moral: 3,
       animal: 4,
       environmental: 3,
     },
     composition: [{
       percentage: 40,
       component: 'coton',
     }, {
       percentage: 60,
       component: 'polyester',
     }],
     brand: 'The North Face',
   }; */

  return (
    <div className="ScannerPage">
      {
        product ? (
          <ProductPage product={product} onDetected={handleBackButton} />
        ) : (
          <Scanner onDetected={onDetected} />
        )
      }
    </div>
  );
}

export default ScannerPage;
