class Vehicles {
    constructor() {
      this.vehicles = [
        {
          id: 1,
          veiculo: 'Carro A',
          marca: 'Marca A',
          ano: 2020,
          descricao: 'Descrição do Carro A',
          vendido: false,
          created: new Date(),
          updated: new Date(),
        },
        {
          id: 2,
          veiculo: 'Carro B',
          marca: 'Marca B',
          ano: 2018,
          descricao: 'Descrição do Carro B',
          vendido: true,
          created: new Date(),
          updated: new Date(),
        },
      ];
    }
  
    getAllVehicles() {
      return this.vehicles;
    }

    findVehicles(term) {
        const filteredVehicles = this.vehicles.filter((vehicle) => {
            return (
                vehicle.veiculo.toLowerCase().includes(term) ||
                vehicle.marca.toLowerCase().includes(term) ||
                vehicle.descricao.toLowerCase().includes(term)
            );
        });

        return filteredVehicles;
    }

    getFilteredVehicles(term) {
        if (term) {
            return this.findVehicles(term);
        } else {
            return this.vehicles;
        }
    }

  
    getVehicleById(id) {
        return this.vehicles.find((vehicle) => vehicle.id === id);
    }
  
    addVehicle(newVehicle) {
        const id = this.getNextId();
        const created = new Date().toISOString();
        const updated = new Date().toISOString();
        const vehicle = { id, created, updated, ...newVehicle };
        this.vehicles.push(vehicle);
        return vehicle;
    }
  
    updateVehicle(id, updatedVehicle) {
        const index = this.vehicles.findIndex((vehicle) => vehicle.id === id);
        if (index !== -1) {
            const { created } = this.vehicles[index];
            const updated = new Date().toISOString();
            const vehicle = { id, created, updated, ...updatedVehicle };
            this.vehicles[index] = vehicle;
            return vehicle;
        }

        return null;
    }
  
    patchVehicle(id, updatedFields) {
        const index = this.vehicles.findIndex((vehicle) => vehicle.id === id);
        if (index !== -1) {
            const vehicle = this.vehicles[index];
            Object.assign(vehicle, updatedFields);
            vehicle.id = id;
            vehicle.updated = new Date().toISOString();
            return vehicle;
        }

        return null;
    }
  
    deleteVehicle(id) {
        const index = this.vehicles.findIndex((vehicle) => vehicle.id === id);
        if (index !== -1) {
            return this.vehicles.splice(index, 1)[0];
        }

        return null;
    }
  
    getNextId() {
        const maxId = Math.max(...this.vehicles.map((vehicle) => vehicle.id), 0);
        return maxId + 1;
    }
}
  
module.exports = Vehicles;