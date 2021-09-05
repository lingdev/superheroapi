#include <iostream>

#include "http_server.h"
#include "serve/superhero.hpp"

int main() {
  served::multiplexer multiplexer;
  learning::HttpServer http_server(superhero);

  http_server.InitializeEndpoints();
  http_server.StartServer();

  return (EXIT_SUCCESS);
}
