const { NominatimUrl, OsrmUrl } = require('../utils/helpers');

class GetData {
  async Calcule(OriginOne, OriginTwo, DestOne, DestTwo, method) {
    try {
      const origem = await this.Origin(OriginOne, OriginTwo, method);
      const destino = await this.Destination(DestOne, DestTwo, method);

      return OsrmUrl(origem, destino);
    } catch (err) {
      throw new Error(err);
    }
  }

  async Origin(OriginOne, OriginTwo, method) {
    try {
      return NominatimUrl(OriginOne, OriginTwo, method);
    } catch (err) {
      throw new Error(err);
    }
  }

  async Destination(DestOne, DestTwo, method) {
    try {
      return NominatimUrl(DestOne, DestTwo, method);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new GetData();
