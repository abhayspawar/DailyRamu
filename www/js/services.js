angular.module('starter.services', ['LocalStorageModule'])

.factory('Category', function() {
  
  var categories = [
    {
      id: 1,
      name: 'Milk',
      items:[
        {
          id: 1,
          name: 'Mahananda',
          price: 100,
          type: 'ltr'
        },
        {
          id: 2,
          name: 'Gokul',
          price: 50,
          type: 'ltr'
        },
        {
          id: 3,
          name: 'Amul',
          price: 40,
          type: 'ltr'
        },
        {
          id: 4,
          name: 'Tetrapack',
          price: 60,
          type: 'ltr'
        },
        {
          id: 5,
          name: 'Heritage',
          price: 30,
          type: 'ltr'
        },
      ]
    },
    {
      id: 2,
      name: 'Eggs',
      items:[
        {
          id: 1,
          name: 'Brown eggs',
          price: 4,
          type: 'piece'
        },
        {
          id: 1,
          name: 'White eggs',
          price: 4,
          type: 'piece'
        }
      ]
    },
    {
      id: 3,
      name: 'Bread',
      items:[
        {
          id: 1,
          name: 'Britania',
          price: 30,
          type: 'pack'
        },
        {
          id: 2,
          name: 'Wonder',
          price: 25,
          type: 'pack'
        },
        {
          id: 3,
          name: 'Hovis',
          price: 60,
          type: 'pack'
        },
        {
          id: 4,
          name: 'Modern',
          price: 30,
          type: 'pack'
        }
      ]
    },
    {
      id: 4,
      name: 'Newspaper',
      items:[
        {
          id: 1,
          name: 'Times Of India',
          price: 6,
          type: 'paper'
        },
        {
          id: 2,
          name: 'Bombay Times',
          price: 4,
          type: 'paper'
        },
        {
          id: 3,
          name: 'Mid Day',
          price: 6,
          type: 'paper'
        },
        {
          id: 4,
          name: 'DNA',
          price: 5,
          type: 'paper'
        },
      ]
    }
  ];

  return {
    all: function () {
      return categories;
    },

    find: function (id) {
      return _.find(categories, function (category) {
        return category.id == id;
      });
    },

    findItem: function (categoryId, itemId) {
      var category = _.find(categories, function (category) {
        return category.id == categoryId;
      });
      
      if (!category) return {};

      return _.find(category.items, function (item) {
        return item.id == itemId;
      });
    }
  }

})

.factory('Order', function(localStorageService) {

  function get () {
    var orders = localStorageService.get('orders');
    return orders || [];
  }

  return {
    all: function () {
      return get();
    },

    add: function (order) {
      var orders = get();
      orders.push(order);
      localStorageService.set('orders', orders);
    },

    remove: function (order) {
      var orders = get();
      orders = _.remove(orders, function (o) {
        return o.id != order.id
      });
      localStorageService.set('orders', orders);
    }
  }

});
