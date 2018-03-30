import React from 'react';

class ItemDetail extends React.Component {
  render(){
    const { item } = this.props;
    return(
      <div>
        <span>{item.name}</span>
      </div>
    );
  }
}

export default ItemDetail; 
