import React, { memo, useContext, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Button } from '@material-ui/core';

import { getMenuItems } from '../../common/components/actions';
import { AppContext } from '../../appContext';
import ItemCard from '../../common/components/item-card/component';

const MenuPageComponent = memo(() => {
  const context = useContext(AppContext);
  const { menuId } = useParams();
  const onInit = () => {
    getMenuItems({ menuId }).then((menu) => {
      context.setMenu([...menu])
    })
  };


  useEffect(onInit, []);
  return (
    <>
      {
        context.menu.map((item) => (
          <ItemCard key={item._id} item={item}/>
        ))
      }
      <Link to='/order'>
        <Button color="primary" variant="contained" fullWidth> Order now
        </Button>
      </Link>
    </>
  )
});


export default MenuPageComponent;
