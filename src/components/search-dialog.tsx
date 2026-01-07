import {
  Combobox,
  Dialog,
  Persona,
  Portal,
  useFilter,
  useListCollection,
  type UseDialogReturn,
} from "@fidely-ui/react"

import { persons } from "~/data/persons"

interface SearchDialogProps {
  value: UseDialogReturn
}

export const SearchDialog = ({ value }: SearchDialogProps) => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: persons,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id,
    filter: contains,
  })

  const handleSearch = (e: Combobox.InputValueChangeDetails) => {
    filter(e.inputValue)
  }

  return (
    <Dialog.RootProvider value={value} size="lg">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content h="50vh" overflow="auto">
            <Dialog.Body>
              <Combobox.Root
                open
                disableLayer
                selectionBehavior="clear"
                inputBehavior="autohighlight"
                loopFocus={false}
                placeholder="Search..."
                collection={collection}
                onInputValueChange={handleSearch}
                openOnClick
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Search..." />
                </Combobox.Control>

                <Combobox.Positioner>
                  <Combobox.Content
                    boxShadow="none"
                    px="0"
                    py="0"
                    overflow="auto"
                    maxH="50vh"
                    overscrollBehavior="contain"
                  >
                    <Combobox.Empty>No person found.</Combobox.Empty>

                    {collection.items.map((item) => (
                      <Combobox.Item key={item.id} item={item}>
                        <Persona
                          title={item.role}
                          name={item.name}
                          img={item.avatar}
                          size="xs"
                        />
                        <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                      </Combobox.Item>
                    ))}
                  </Combobox.Content>
                </Combobox.Positioner>
              </Combobox.Root>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.RootProvider>
  )
}
